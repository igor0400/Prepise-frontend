import { Card, CardBody, Spinner } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC, MouseEvent, MouseEventHandler, useMemo } from 'react';
import { QuestionType } from '../../Question/model/types/question';
import { DeleteIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRequest, useTypedSelector } from '../../../shared';
import { deleteQuestion } from '../lib/api/deleteQuestion';
import classNames from 'classnames';

import viewesIcon from '../../../../public/images/icons/view.svg';
import doneIcon from '../../../../public/images/icons/done-arrow.svg';

interface Props extends QuestionType {
  deleteItem: (itemId: number) => any;
}

const QuestionLineCard: FC<Props> = ({
  id,
  title,
  viewes,
  type,
  usedUsersInfo,
  authorId,
  deleteItem,
}) => {
  const { request, loading } = useRequest(true, true);
  const userId = useTypedSelector((state) => state.user.data?.id);

  const isViewed = useMemo(() => {
    for (let info of usedUsersInfo) {
      if (info.userId === userId && info.view) return true;
    }
    return false;
  }, [userId, usedUsersInfo]);

  const isDone = useMemo(() => {
    if (authorId === userId) return false;

    for (let info of usedUsersInfo) {
      if (info.userId === userId && info.done) return true;
    }

    return false;
  }, [userId, usedUsersInfo]);

  const handleClick = async (e: MouseEvent<SVGElement>) => {
    e.preventDefault();

    const isDeleted = await request(deleteQuestion, true, id);

    if (isDeleted) {
      deleteItem(id);
    }
  };

  const iconSize = 20;

  return (
    <Card
      className="max-w-lg"
      style={{
        background: isViewed ? '#EAEAEA' : undefined,
        border: isDone ? '1px solid #3b82f6' : undefined,
      }}
    >
      <Link href={type === 'default' ? `/questions/${id}` : `/tests/${id}`}>
        <CardBody
          className="flex justify-between items-center"
          style={{ padding: '10px 15px' }}
        >
          <p>{title}</p>
          <div className="flex items-center gap-2">
            {isDone && (
              <Image src={doneIcon} alt="done" width={16} height={16} />
            )}

            <div className="flex gap-0.5 items-center">
              <span>{viewes}</span>
              <Image
                src={viewesIcon}
                alt="viewes"
                width={iconSize}
                height={iconSize}
              />
            </div>
            {authorId === userId && (
              <>
                {loading ? (
                  <Spinner size="sm" />
                ) : (
                  <DeleteIcon onClick={handleClick} />
                )}
              </>
            )}
          </div>
        </CardBody>
      </Link>
    </Card>
  );
};

export default QuestionLineCard;
