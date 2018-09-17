class Video < ApplicationRecord
validates :title, presence: true, allow_blank: false
validates :description, presence: true

end
