import type { RequestHandler } from 'express'
import { ok } from '../utils/response'
import { listAllProjects } from '../services/projectService'

export const listProjects: RequestHandler = (_req, res) => {
  res.json(ok(listAllProjects()))
}
