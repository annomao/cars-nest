class CreateQuecomments < ActiveRecord::Migration[6.1]
  def change
    create_table :quecomments do |t|
      t.string :description
      t.integer :upvotes
      t.integer :downvotes
      t.integer :user_id
      t.integer :question_id

      t.timestamps
    end
  end
end
