import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-img p-2">
      <h3 className="text-center m-2 text-light">Contact Us!</h3>
      <div className="d-flex flex-row p-5">
        <div className="p-3 w-75">
          <h5 className="text-light">Here you can contact us!</h5>
          <Form name="form" id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <Form.Group className="mb-3 col" controlId="name">
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  {...register("name", { required: true, maxLength: 50 })}
                />
                <p className="text-danger">
                  {errors.name?.type === "required" && "Name is required"}
                </p>
              </Form.Group>
              <Form.Group className="mb-3 col" controlId="email">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
                />
                <p className="text-danger">
                  {errors.email?.type === "required" && "Email is required"}
                </p>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="coment">
                <Form.Label className="text-light">Coment</Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="Let your coment!!"
                  style={{ height: "100px" }}
                  {...register("coment", { required: true })}
                />
                <p className="text-danger">
                  {errors.coment?.type === "required" && "Coment is required"}
                </p>
              </Form.Group>
            </div>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="w-25">
          <img
            srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigemZehC1bI6SVAwV0SNNcQOmUBI4XLdS2g&usqp=CAU"
            alt="ContactSection"
            className="d-inline-block"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
