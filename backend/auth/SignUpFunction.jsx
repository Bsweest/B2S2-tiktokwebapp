const SignUpEmail = async (
  email,
  pass,
  username,
  displayname,
  birthday,
  supabase,
) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: pass,
  });

  if (error) return false;

  const newUser = {
    id: data.id,
    created_at: userData.created_at,
    username: username,
    displayname: displayname,
    birth: birthday,
  };

  const { error: cd2 } = await supabase.from('profiles').insert(newUser);

  if (cd2) return false;

  return true;
};

export default SignUpEmail;
