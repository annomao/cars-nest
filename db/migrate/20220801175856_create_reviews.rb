class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.string :image
      t.string :categories
      t.integer :upvotes
      t.integer :downvotes
      t.integer :user_id

      t.timestamps
    end
  end
end
