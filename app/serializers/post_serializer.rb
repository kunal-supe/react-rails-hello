class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :published, :published_by
end
