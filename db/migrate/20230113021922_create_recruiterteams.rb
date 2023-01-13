class CreateRecruiterteams < ActiveRecord::Migration[6.1]
  def change
    create_table :recruiterteams do |t|
      t.belongs_to :recruiter, null: false, foreign_key: true
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
