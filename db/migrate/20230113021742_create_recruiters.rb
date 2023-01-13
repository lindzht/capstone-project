class CreateRecruiters < ActiveRecord::Migration[6.1]
  def change
    create_table :recruiters do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.boolean :admin
      t.belongs_to :company, null: true, foreign_key: true

      t.timestamps
    end
  end
end
