import {} from "@mui/material"
const PaymentPage = () => {
  return     <Stack spacing={2}>

          <TextField
        label={t("paymentPage.creditCardForm.pan")}
        variant="outlined"
        onChange={(event) => {
          setTopUpInfo((prev) => {
            return {
              ...prev,
              pan: event.target.value,
              focus: "pan",
            }
          })
        }}
        value={topUpInfo.pan}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreditCardIcon />
            </InputAdornment>
          ),
        }}
      />
      <Stack direction="row" spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={itLocale}>
          <MobileDatePicker
            views={["year", "month"]}
            label={t("paymentPage.creditCardForm.validity")}
            minDate={new Date()}
            value={new Date(topUpInfo.expiry)}
            onChange={(expiry) => {
              if (expiry) {
                setTopUpInfo((prev) => {
                  return {
                    ...prev,
                    expiry,
                    focus: "expiry",
                  }
                })
              }
            }}
          />
        </LocalizationProvider>
        <TextField
          label={t("paymentPage.creditCardForm.cvv")}
          variant="outlined"
          onChange={(event) => {
            setTopUpInfo((prev) => {
              return {
                ...prev,
                cvc: event.target.value,
                focus: "cvc",
              }
            })
          }}
          value={topUpInfo.cvc}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

  </Stack>
}

export default PaymentPage