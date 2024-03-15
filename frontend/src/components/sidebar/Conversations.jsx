import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis.js";
import Conversation from "./Conversation";

const Conversations = () => {

	const {loading,conversations}=useGetConversations();
	// 	console.log("CONVERSATIONS : ",conversations);
	return (
		<div className='py-2 flex flex-col overflow-auto'>

			{conversations.map((conversation,idx)=>(
				// console.log("conversations are ",conversation);
				<Conversation
				conversation={conversation}
				key={conversation._id}
				
				emoji={getRandomEmoji()}
				lastIdx={idx === conversations.length-1}
				/>
			))}

			{loading ? <span className="loading loading-spinner mx-auto"></span> : null}
			
      
		</div>
	);
};
export default Conversations;