using System;
using System.Globalization;
using System.Threading.Tasks;
using Statiq.App;
using Statiq.Web;

namespace VanillaPlusWebsite
{
    public class Program
    {
        public static async Task<int> Main(string[] args)
        {
            var currentDirectory = Directory.GetCurrentDirectory();
            var nodeDirectory = Path.Combine(currentDirectory, "..", "node");
            var inputDirectory = Path.Combine(currentDirectory, "input");

            CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("en-US");

            return await Bootstrapper
                .Factory
                .CreateWeb(args)
                .AddProcess(
                    ProcessTiming.Initialization,
                    _ => new ProcessLauncher("npm", "install")
                    {
                        LogErrors = false,
                        WorkingDirectory = nodeDirectory
                    }).AddProcess(
                    ProcessTiming.AfterExecution,
                    _ => new ProcessLauncher("npx", "tailwind", "build",
                        $"-i {Path.Combine(inputDirectory, "assets", "css", "_site.css")}",
                        $"-o {Path.Combine(currentDirectory, "output", "styles.css")}")
                    {
                        LogErrors = false,
                        WorkingDirectory = nodeDirectory
                    })
                .RunAsync();
        }
    }
}