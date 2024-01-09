import process from 'node:process'
import fs from 'node:fs'
import path from 'node:path'
import { findLogDirectory } from '../../src/transports/files.js'

const processCwd = jest.spyOn(process, 'cwd')
const pathJoin = jest.spyOn(path, 'join')
const fsAccessSync = jest.spyOn(fs, 'accessSync')
const fsMkdirSync = jest.spyOn(fs, 'mkdirSync')

describe('findLogDirectory', () => {
  it('should return the correct log directory', () => {
    const dir = 'logs'
    const cwd = '/test'
    const logDirectory = '/test/logs'

    processCwd.mockReturnValue(cwd)
    pathJoin.mockReturnValue(logDirectory)
    fsAccessSync.mockImplementation(() => {})
    fsMkdirSync.mockImplementation(() => {})

    const result = findLogDirectory(dir)

    expect(result).toEqual({ dir: logDirectory })
    expect(processCwd).toHaveBeenCalled()
    expect(pathJoin).toHaveBeenCalledWith(cwd, dir)
    expect(fsAccessSync).toHaveBeenCalledWith(logDirectory)
  })

  it('should create the directory if it does not exist', () => {
    const dir = 'logs'
    const cwd = '/test'
    const logDirectory = '/test/logs'

    processCwd.mockReturnValue(cwd)
    pathJoin.mockReturnValue(logDirectory)
    fsAccessSync.mockImplementation(() => { throw new Error('ENOENT') })
    fsMkdirSync.mockImplementation(() => {})

    const result = findLogDirectory(dir)

    expect(result).toEqual({ dir: logDirectory })
    expect(processCwd).toHaveBeenCalled()
    expect(pathJoin).toHaveBeenCalledWith(cwd, dir)
    expect(fsAccessSync).toHaveBeenCalledWith(logDirectory)
    expect(fsMkdirSync).toHaveBeenCalledWith(logDirectory)
  })
})
