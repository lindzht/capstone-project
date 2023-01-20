class ChangeIsHiredToBeStringInReqs < ActiveRecord::Migration[6.1]
  def change
    change_column :reqs, :is_hired, :string
  end
end
