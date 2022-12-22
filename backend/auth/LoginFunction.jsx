import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

const UseSignIn = async (email, pass) => {
  const supabase = useSupabaseClient();
  const user = useUser();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  });

  return data;
};

export default UseSignIn;
