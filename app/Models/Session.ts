import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import User from 'App/Models/User'
import Subject from 'App/Models/Subject'

export default class Session extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column.dateTime()
  public startingAt: DateTime

  @column.dateTime()
  public endingAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignUuid(session: Session) {
    session.id = uuid()
  }

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @manyToMany(() => Subject, {
    pivotColumns: ['description'],
  })
  public subjects: ManyToMany<typeof Subject>
}
