import SectionHeading from "@/components/SectionHeading";

const ContactSection = () => {
    return (
        <section id="contact">
            <div className="container mx-auto p-4 space-y-5">
                <SectionHeading text="Contact" />
                <div>

                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">
                                Subject
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">
                                Message
                            </label>
                            <textarea className="min-h-40 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Send
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;