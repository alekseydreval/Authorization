class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :registerable,
         :recoverable, :rememberable, :validatable, :trackable

  devise :database_authenticatable, authentication_keys: [:name]

  validate :passwords_must_match, on: [:create, :update]
  validates :name, uniqueness: true

  def passwords_must_match
    if password != password_confirmation
      errors.add(:password, "don't match")
    end
  end

  def email_required?
    false
  end

  def admin?
    admin
  end

end
