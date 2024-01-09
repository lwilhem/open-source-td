import fs from 'node:fs'
import { BaseTransport } from './transports'

export class FileTransport extends BaseTransport {
  constructor(opts) {
    super(opts)
  }
}
