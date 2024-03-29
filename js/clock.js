/* to set current time */
const time = new Date();
const hour = -3600 * (time.getHours() % 12);
const mins = -60 * time.getMinutes();
app.style.setProperty("--_dm", `${mins}s`);
app.style.setProperty("--_dh", `${hour + mins}s`);
