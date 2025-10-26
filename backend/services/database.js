import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const LAWS_FILE = path.join(DATA_DIR, 'ux-laws.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Read JSON file
async function readJSON(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null; // File doesn't exist
    }
    throw error;
  }
}

// Write JSON file
async function writeJSON(filePath, data) {
  await ensureDataDir();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Users operations
export const usersDB = {
  async getAll() {
    const users = await readJSON(USERS_FILE);
    return users || [];
  },

  async findByEmail(email) {
    const users = await this.getAll();
    return users.find(u => u.email.toLowerCase() === email.toLowerCase());
  },

  async findById(id) {
    const users = await this.getAll();
    return users.find(u => u.id === id);
  },

  async create(userData) {
    const users = await this.getAll();
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      progress: {},
      completedLaws: [],
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    await writeJSON(USERS_FILE, users);
    return newUser;
  },

  async update(id, updates) {
    const users = await this.getAll();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    users[index] = { ...users[index], ...updates };
    await writeJSON(USERS_FILE, users);
    return users[index];
  },

  async updateProgress(id, lawId, completed) {
    const users = await this.getAll();
    const user = users.find(u => u.id === id);
    if (!user) return null;

    user.progress = user.progress || {};
    user.progress[lawId] = completed;

    if (completed && !user.completedLaws.includes(lawId)) {
      user.completedLaws.push(lawId);
    } else if (!completed && user.completedLaws.includes(lawId)) {
      user.completedLaws = user.completedLaws.filter(l => l !== lawId);
    }

    await writeJSON(USERS_FILE, users);
    return user;
  }
};

// UX Laws operations
export const lawsDB = {
  async getAll() {
    const laws = await readJSON(LAWS_FILE);
    return laws || [];
  },

  async findById(id) {
    const laws = await this.getAll();
    return laws.find(l => l.id === id);
  },

  async initialize(lawsData) {
    const existing = await this.getAll();
    if (existing.length > 0) {
      throw new Error('UX laws already initialized');
    }
    await writeJSON(LAWS_FILE, lawsData);
    return lawsData;
  }
};

// Initialize on import
await ensureDataDir();
