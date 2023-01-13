class CreateReqteams < ActiveRecord::Migration[6.1]
  def change
    create_table :reqteams do |t|
      t.belongs_to :req, null: false, foreign_key: true
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
