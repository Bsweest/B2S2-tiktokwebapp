const LogIn = async (email, pass, supabase) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  });

  return error;
};

export default LogIn;
