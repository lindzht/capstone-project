class CreateReqs < ActiveRecord::Migration[6.1]
  def change
    create_table :reqs do |t|
      t.string :req_id
      t.string :name
      t.string :org
      t.string :hiring_manager
      t.date :open_date
      t.date :hire_goal
      t.boolean :is_hired
      t.date :hired_date
      t.string :candidate
      t.date :candidate_app
      t.belongs_to :recruiter, null: true, foreign_key: true

      t.timestamps
    end
  end
end
