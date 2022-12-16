10.times do
  doctor = Doctor.create(
    doctor_fname: Faker::Name.name,
    doctor_lname: Faker::Name.name,
    specialty: Faker::Educator.subject,
  )

  user = User.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name
  )

  Appointment.create(
    doctor_id: doctor.id,
    user_id: user.id
  )
end

puts "# Doctors:"
puts Doctor.all.count

puts "# Users:"
puts User.all.count

puts "# Appointments:"
puts Appointment.all.count