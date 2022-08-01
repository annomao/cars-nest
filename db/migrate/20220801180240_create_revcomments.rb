class CreateRevcomments < ActiveRecord::Migration[6.1]
  def change
    create_table :revcomments do |t|
      t.string :description
      t.integer :upvotes
      t.integer :downvotes
      t.integer :user_id
      t.integer :review_id

      t.timestamps
    end
  end
end
