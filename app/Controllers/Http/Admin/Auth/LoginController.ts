import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler';

export default class LoginController {
    public showLogin({}: HttpContextContract) {}

    public actionLogin({}: HttpExceptionHandler){}
}
