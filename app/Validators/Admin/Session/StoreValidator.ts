import { rules, schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    startingAt: schema.date({format: 'yyyy-MM-dd'}, [
      rules.required(),
    ]),
    endingAt: schema.date({format: 'yyyy-MM-dd'}, [
      rules.required(),
    ]), 
    maxRangeValue: schema.number([
      rules.required()
    ])
  })

  public messages: CustomMessages = {}
}
