interface MessageRowProps {
  id: string;
  txt: string;
}

function MessageRow({ id, txt }: MessageRowProps) {
  return (
    <tr id={`MessageRow__container__${id}`}>
      <td
        id={`MessageRow__text__${id}`}
        colSpan={4}
        className="px-6 py-4 text-center text-gray-500"
      >
        {txt}
      </td>
    </tr>
  );
}

export default MessageRow;
