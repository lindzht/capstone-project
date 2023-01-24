# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding..."


c1 = Company.create(name: "Cool Company")

r1 = Recruiter.create(first_name: "Lindsay Admin", last_name: "Taylor", email:"ltaylor838@gmail.com", admin: true, password: "123", password_confirmation: "123", company_id: c1.id)
r2 = Recruiter.create(first_name: "Lindsay", last_name: "Butts", email:"llindsayttaylor@gmail.com", admin: false, password: "123", password_confirmation: "123", company_id: c1.id)

t1 = Team.create(name: "All Recruiters", company_id: c1.id)
t2 = Team.create(name: "Tech Headcount", company_id: c1.id)

rt1 = Recruiterteam.create(recruiter_id: r1.id, team_id: t1.id)
rt2 = Recruiterteam.create(recruiter_id: r2.id, team_id: t1.id)
rt3 = Recruiterteam.create(recruiter_id: r2.id, team_id: t2.id)


q1 = Req.create(req_id: "TEST1", name: "Sales Executive", org: "Sales", hiring_manager: "Test Hiring Manager", hired_status: "Open", company_id: c1.id)
q2 = Req.create(req_id: "TEST2", name: "Engineer", org: "Engineering", hiring_manager: "Test Hiring Manager 2", hired_status: "Open", recruiter_id: r2.id, company_id: c1.id)
q3 = Req.create(req_id: "TEST3", name: "Engineer II", org: "Engineering", hiring_manager: "Test Hiring Manager 2", hired_status: "Open", recruiter_id: r2.id, company_id: c1.id)


qt1 = Reqteam.create(req_id: q1.id, team_id: t1.id)
qt2 = Reqteam.create(req_id: q2.id, team_id: t1.id)
qt3 = Reqteam.create(req_id: q2.id, team_id: t2.id)

puts "seeded baby!"