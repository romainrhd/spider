import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'session_subject'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('session_id').references('sessions.id')
      table.integer('subject_id').unsigned().references('subjects.id')
      table.primary(['session_id', 'subject_id'])
      table.timestamp('description').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
