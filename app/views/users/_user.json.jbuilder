json.extract! user, :id, :encrypted_password, :name, :last_sign_in_at, :created_at, :updated_at
json.url user_url(user, format: :json)
