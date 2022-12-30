const LogIn = async (email, pass, supabase) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  });

  window.localStorage.setItem('userId', data.user.id);
  return error;
};

export default LogIn;
