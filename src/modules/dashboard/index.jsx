import {
	Autocomplete,
	Button,
	FormControl,
	MenuItem,
	Select,
	Stack,
	TextField,
} from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";
import { StyledDashboardFormContainer, StyledDashboardRoot } from "./styled";
import { useState } from "react";
import useGetRegions from "./hooks/useGetRegions";
import useGetCities from "./hooks/useGetCities";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PackageDetails from "./modals/packageDetails";
import CustomTravellerPopOver from "../../components/custom-traveller-popover";
import AboutSection from "./aboutSection";

const NIGHT_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const roomData = {
	adults: 2,
	kids: 0,
	infants: 0,
};

const Index = () => {
	const { regions, error: errorRegions } = useGetRegions();

	const [currentRegion, setCurrentRegion] = useState("");
	const [currentRegionInputValue, setCurrentRegionInputValue] = useState("");
	const [currentCity, setCurrentCity] = useState("");
	const [currentCityInputValue, setCurrentCityInputValue] = useState("");
	const [checkInDate, setCheckInDate] = useState(null);
	const [nights, setNights] = useState(1);
	const [showDetailsPopup, setShowDetailsPopup] = useState(false);
	const { cities, error: errorCities } = useGetCities(currentRegion);
	const [travellerDetails, setTravellerDetails] = useState({
		0: roomData,
	});

	const handleLogout = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	const handleChangeNight = (event) => setNights(event.target.value);
	const toggleDialogOpen = () => setShowDetailsPopup((prev) => !prev);
	const handleSearchPackages = () => {
		toggleDialogOpen();
	};

	const validateFormData = (() => {
		return (
			!currentRegion ||
			!currentRegion.length ||
			!currentCity ||
			!currentCity.length ||
			!checkInDate
		);
	})();

	return (
		<>
			<StyledDashboardRoot rowGap={10}>
				<StyledFlexContainer flexEnd fullWidth style={{ padding: "1rem" }}>
					<Button
						variant='contained'
						color='error'
						size='small'
						onClick={handleLogout}>
						Logout
					</Button>
				</StyledFlexContainer>
				<StyledFlexContainer fullWidth>
					<StyledDashboardFormContainer
						rowGap={2}
						style={{ padding: "2rem 1rem" }}>
						<StyledFlexContainer style={{ color: "#fff" }}>
							Book your Jungle Experiences along with Safaris & Local Activities
						</StyledFlexContainer>
						<StyledFlexContainer flexSpaceBetween>
							<Stack rowGap={1}>
								{errorRegions.length ? (
									<StyledFlexContainer style={{ color: "red" }}>
										Failed To Fetch Regions
									</StyledFlexContainer>
								) : null}
								{!errorRegions.length && (
									<StyledFlexContainer flexStart style={{ color: "#fff" }}>
										Select Region
									</StyledFlexContainer>
								)}
								<Autocomplete
									value={currentRegion}
									onChange={(event, newValue) => {
										setCurrentRegion(newValue);
									}}
									inputValue={currentRegionInputValue}
									onInputChange={(event, newInputValue) => {
										setCurrentRegionInputValue(newInputValue);
									}}
									id='controllable-states-demo'
									options={regions}
									sx={{
										width: "20rem",
										background: "#fff",
										borderRadius: "0.5rem",
									}}
									size='small'
									renderInput={(params) => (
										<TextField {...params} placeholder='Select Region' />
									)}
								/>
							</Stack>
							<Stack rowGap={1}>
								{errorCities.length ? (
									<StyledFlexContainer style={{ color: "red" }}>
										Failed To Fetch Cities
									</StyledFlexContainer>
								) : null}
								{!errorCities.length && (
									<StyledFlexContainer flexStart style={{ color: "#fff" }}>
										Select City
									</StyledFlexContainer>
								)}
								<Autocomplete
									value={currentCity}
									onChange={(event, newValue) => {
										setCurrentCity(newValue);
									}}
									inputValue={currentCityInputValue}
									onInputChange={(event, newInputValue) => {
										setCurrentCityInputValue(newInputValue);
									}}
									id='controllable-states-demo'
									options={cities}
									sx={{
										width: "20rem",
										background: "#fff",
										borderRadius: "0.5rem",
									}}
									size='small'
									disabled={!currentRegion}
									renderInput={(params) => (
										<TextField {...params} placeholder='Select City' />
									)}
								/>
							</Stack>
						</StyledFlexContainer>
						<StyledFlexContainer flexSpaceBetween>
							<Stack rowGap={1}>
								<StyledFlexContainer style={{ color: "#fff" }} flexStart>
									CheckIn
								</StyledFlexContainer>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										sx={{
											background: "#fff",
											borderRadius: "0.5rem",
										}}
										minDate={new Date()}
										value={checkInDate}
										onChange={(date) => setCheckInDate(date)}
										slotProps={{ textField: { size: "small" } }}
									/>
								</LocalizationProvider>
							</Stack>
							<Stack rowGap={1}>
								<StyledFlexContainer style={{ color: "#fff" }} flexStart>
									Number Of Nights
								</StyledFlexContainer>
								<FormControl sx={{ minWidth: 200 }}>
									<Select
										value={nights}
										onChange={handleChangeNight}
										displayEmpty
										inputProps={{ "aria-label": "Without label" }}
										sx={{ background: "#fff", borderRadius: "0.5rem" }}
										size='small'>
										{NIGHT_OPTIONS.map((option) => (
											<MenuItem key={option} value={option}>
												{option === 1 ? `${option} Night` : `${option} Nights`}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Stack>
							<Stack rowGap={1}>
								<StyledFlexContainer style={{ color: "#fff" }} flexStart>
									Travellers
								</StyledFlexContainer>
								<CustomTravellerPopOver
									travellerDetails={travellerDetails}
									setTravellerDetails={setTravellerDetails}
								/>
							</Stack>
						</StyledFlexContainer>
						<StyledFlexContainer flexStart>
							<Button
								variant='contained'
								color='warning'
								onClick={handleSearchPackages}
								style={{ background: "#f90" }}>
								Search Packages
							</Button>
						</StyledFlexContainer>
					</StyledDashboardFormContainer>
				</StyledFlexContainer>
				{showDetailsPopup && (
					<PackageDetails
						toggleDialogOpen={toggleDialogOpen}
						showDetailsPopup={showDetailsPopup}
						currentRegion={currentRegion}
						currentCity={currentCity}
						checkInDate={checkInDate}
						nights={nights}
					/>
				)}
			</StyledDashboardRoot>
			<AboutSection />
		</>
	);
};

export default Index;
