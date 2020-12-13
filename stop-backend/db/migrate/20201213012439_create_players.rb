class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :initials
      t.string :name
      t.string :place
      t.string :color
      t.string :animal
      t.string :thing

      t.timestamps
    end
  end
end
