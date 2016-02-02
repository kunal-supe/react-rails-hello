class Post < ActiveRecord::Base

  def is_published?
    if self.published == true
      "Yes"
    else
      "No"
    end    
  end

end
