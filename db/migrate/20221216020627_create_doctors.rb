class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :doctor_fname
      t.string :doctor_lname
      t.string :specialty

      t.timestamps
    end
  end
end
