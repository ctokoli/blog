class Post < ApplicationRecord
  validates :content, presence: true
  validates :title, presence: true
  has_many :comments
end
