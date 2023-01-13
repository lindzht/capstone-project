# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_13_021954) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recruiters", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin"
    t.bigint "company_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_recruiters_on_company_id"
  end

  create_table "recruiterteams", force: :cascade do |t|
    t.bigint "recruiter_id", null: false
    t.bigint "team_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recruiter_id"], name: "index_recruiterteams_on_recruiter_id"
    t.index ["team_id"], name: "index_recruiterteams_on_team_id"
  end

  create_table "reqs", force: :cascade do |t|
    t.string "req_id"
    t.string "name"
    t.string "org"
    t.string "hiring_manager"
    t.date "open_date"
    t.date "hire_goal"
    t.boolean "is_hired"
    t.date "hired_date"
    t.string "candidate"
    t.date "candidate_app"
    t.bigint "recruiter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recruiter_id"], name: "index_reqs_on_recruiter_id"
  end

  create_table "reqteams", force: :cascade do |t|
    t.bigint "req_id", null: false
    t.bigint "team_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["req_id"], name: "index_reqteams_on_req_id"
    t.index ["team_id"], name: "index_reqteams_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.bigint "company_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_teams_on_company_id"
  end

  add_foreign_key "recruiters", "companies"
  add_foreign_key "recruiterteams", "recruiters"
  add_foreign_key "recruiterteams", "teams"
  add_foreign_key "reqs", "recruiters"
  add_foreign_key "reqteams", "reqs"
  add_foreign_key "reqteams", "teams"
  add_foreign_key "teams", "companies"
end
