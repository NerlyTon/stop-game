class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :initials, :name, :place, :color, :animal, :thing
end
