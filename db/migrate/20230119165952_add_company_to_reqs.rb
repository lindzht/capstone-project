class AddCompanyToReqs < ActiveRecord::Migration[6.1]
  def change
    add_reference :reqs, :company, null: false, foreign_key: true
  end
end
