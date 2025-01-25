const { exec } = require("child_process");
const chalk = require("chalk");

// Fungsi untuk menampilkan header panel
function showInfoPanel() {
  console.clear(); // Bersihkan terminal
  console.log(chalk.blue("======================================"));
  console.log(chalk.green("     🌟 Welcome to Your Panel 🌟"));
  console.log(chalk.blue("======================================\n"));
  console.log(chalk.yellow("Info:"));
  console.log(chalk.white("- Menjalankan aplikasi secara otomatis."));
  console.log(chalk.white("- Gunakan ini sebagai alternatif dari `npm start`."));
  console.log(chalk.blue("\n======================================\n"));
}

// Fungsi untuk menjalankan aplikasi
function runApp() {
  showInfoPanel();
  const command = "npm start"; // Command default
  console.log(chalk.green("🚀 Menjalankan aplikasi...\n"));

  // Jalankan perintah npm start
  const process = exec(command);

  // Tampilkan output proses
  process.stdout.on("data", (data) => {
    console.log(chalk.white(data));
  });

  // Tampilkan error jika ada
  process.stderr.on("data", (data) => {
    console.log(chalk.red(`⚠️ Error: ${data}`));
  });

  // Tampilkan pesan selesai jika proses selesai
  process.on("close", (code) => {
    console.log(chalk.green(`\n✅ Proses selesai dengan kode: ${code}`));
  });
}

// Jalankan fungsi aplikasi
runApp();
