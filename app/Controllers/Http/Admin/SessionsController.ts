import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Session from 'App/Models/Session'
import StoreValidator from 'App/Validators/Admin/Session/StoreValidator'

export default class SessionsController {
  public async index({ view }: HttpContextContract) {
    return view.render('admin/sessions/index')
  }

  public async create({ view }: HttpContextContract) {
    return view.render('admin/sessions/create')
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(StoreValidator)
    await Session.create(payload)
    return response.redirect().toRoute('admin.sessions.index')
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
