class RenameReqIsHiredToHiredStatus < ActiveRecord::Migration[6.1]
  def change
    rename_column :reqs, :is_hired, :hired_status
  end
end
