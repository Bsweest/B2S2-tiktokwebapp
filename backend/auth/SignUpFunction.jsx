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
    id: data.user.id,
    username: username,
    displayname: displayname,
    birth: birthday,
  };

  console.log(newUser);
  const { error: cd2 } = await supabase.from('profiles').insert(newUser);
  console.log(cd2);

  if (cd2) return false;

  return true;
};

export default SignUpEmail;
