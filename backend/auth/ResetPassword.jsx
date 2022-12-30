const sendResetPassword = async (email, supabase) => {
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/reset-password',
  });
};

const runResetPassword = async (newPassword, supabase) => {
  return await supabase.auth.updateUser({
    password: newPassword,
  });
};

export { sendResetPassword, runResetPassword };
