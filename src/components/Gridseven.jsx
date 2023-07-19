import Client from "./Client";

export default function Gridseven() {
  return (
    <div className="grid-seven">
      <h1>CLIENT TESTIMONIALS</h1>
      <div className="client__section">
        <Client
          image="images/image-emily.jpg"
          message="We put our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          role="Marketing Director"
        />
        <Client
          image="images/image-thomas.jpg"
          message="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experiene."
          name="Thomas S."
          role="Chief Operating Officer"
        />
        <Client
          image="images/image-jennie.jpg"
          message="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          role="Business Owner"
        />
      </div>
    </div>
  );
}
