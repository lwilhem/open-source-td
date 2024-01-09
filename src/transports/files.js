import process from 'node:process'
import fs from 'node:fs'
import path from 'node:path'

/**
 *
 * @param {string} dir Default = logs
 * @returns {{dir: string}} resolves to the log directory
 */
export function findLogDirectory(dir = 'logs') {
  const current_dir = process.cwd()
  const log_directory = path.join(current_dir, dir)

  try {
    fs.accessSync(log_directory)
    console.log(`Log directory found at ${log_directory}`)
  }
  catch (err) {
    console.error('Log directory not found, creating...')
    fs.mkdirSync(log_directory)
  }

  return {
    dir: log_directory,
  }
}
