import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ScheduleLanguage() {
  return (
    <div className="h-[100vh] bg-slate-900 flex flex-col justify-start items-center font-[Inter] w-full">
      <div className="mt-20 w-full flex justify-center items-center flex-col">
        <div className="bg-[url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fcities%2Fnew-delhi.avif')] text-[#023047] font-bold Inter800 rounded-3xl lg:w-[80%] h-ful bg-center bg-cover h-[70vh] flex flex-col gap-9 justify-start items-center pt-10">
          <h1 className="text-[7rem]">Learn Hindi</h1>
          <p className="text-3xl">Choose the time that suits you! </p>
          <div className="h-full flex flex-col-reverse pb-7">
            <div className=" bg-slate-200/90 px-6 py-4 rounded-xl">
              <p>Schedule your appointment!</p>
              <div className="flex flex-col gap-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker sx={{ width: "500px" }} />
                </LocalizationProvider>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
