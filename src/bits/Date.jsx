import React from "react";

export const Date = ({ label, value, onChange }) => {
	return (
		<div class="bg-[#f7fafc] rounded-lg md:block hidden">
			<div class="relative bg-inherit">
				<input
					type="date"
					id="date"
					name="date"
					class="peer bg-white h-10 w-36 rounded-md text-sm text-gray-600 placeholder-transparent ring-1 px-2 ring-gray-200 focus:ring-blue-600 focus:outline-none focus:border-rose-600"
					placeholder="mm/dd/yyyy"
					value={value}
					onChange={onChange}
				/>
				<label
					for="username"
					class="absolute cursor-text left-0 -top-3 text-sm text-gray-600 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-blue-600 peer-focus:text-sm transition-all">
					{label}
				</label>
			</div>
		</div>
	);
};
