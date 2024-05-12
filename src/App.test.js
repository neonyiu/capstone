import { fireEvent, render, screen } from "@testing-library/react";
import { BookingForm } from "./component/BookingForm";
import '@testing-library/jest-dom';

test('Render the BookingForm heading', () => {
    render(<BookingForm show={true} setShow={() => {}} availableTimes={[]} />);
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
});

describe("Booking Form", () => {
    test("Submission is disabled if required time field is not chosed, onSubmit will not be called", () => {
        const handleSubmit = jest.fn();
        render(<BookingForm show={true} setShow={() => {}} availableTimes={[]} onSubmit={handleSubmit}/>)

        const submitButton = screen.getByText("Submit");
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled;
    })
})